import json
from typing import List, Any
import numpy as np
import numpy.typing as npt
import scipy as sp
from dataclasses import dataclass, field
import math
from pathlib import Path
import os


devRoot = Path(os.environ["ULLD_DEV_ROOT"])
targetPath = devRoot / "packages/math/__test__/testData.json"

collectiveData: Any = {"data": []}
arrType = type(np.array([]))


@dataclass
class TestDataItem:
    functionName: str
    value: npt.ArrayLike
    input: Any

    def __post_init__(self):
        if type(self.value) == arrType:
            vals = []
            for n in self.value:
                vals.append(n if not math.isnan(n) else "NaN")
            self.value = vals
        if self.value is None:
            self.value = "None"
        if type(self.input) == arrType:
            vals = []
            for n in self.input:
                vals.append(n if not math.isnan(n) else "NaN")
            self.input = vals
        if self.input is None:
            self.input = "None"


@dataclass
class WithoutInput:
    functionName: str
    value: npt.ArrayLike

    def __post_init__(self):
        if type(self.value) == arrType:
            vals = []
            for n in self.value:
                vals.append(n if not math.isnan(n) else "NaN")
            self.value = vals
        if self.value is None:
            self.value = "None"
        if self.input is None:
            self.input = "None"


@dataclass
class TestDataMultiple:
    input: Any
    value: List[TestDataItem]

    def __post_init__(self):
        if type(self.input) == arrType:
            vals = []
            for n in self.input:
                vals.append(n if not math.isnan(n) else "NaN")
            self.input = vals


@dataclass
class TestData:
    input: npt.ArrayLike = field(
        default_factory=lambda: np.random.random(100) * np.linspace(-1000, 1000, 100)
    )
    testData: List[TestDataItem] = field(default_factory=lambda: [])
    groupedTestData: npt.ArrayLike = field(init=False)
    multiTestData: List[TestDataMultiple] = field(default_factory=lambda: [])

    def __post_init__(self):
        self.groupedTestData = self.getTestInputArray()
        self.fromRange()
        self.fromLinSpace()
        self.numericFuncs()
        self.applyData()

    def fromLinSpace(self):
        i = self.getTestInputArray(2)
        _input = [i[0], i[1], 100]
        self.testData.append(TestDataItem("fromLinSpace", np.linspace(*_input), _input))

    def fromRange(self):
        i = self.getTestInputArray(2, 100)
        _input = [i[0], i[1], 1]
        self.testData.append(TestDataItem("fromRange", np.arange(*_input), _input))

    def getTestInputArray(self, _length: int = 100, minMax: int = 1000):
        return np.random.random(_length) * np.linspace(-minMax, minMax, _length)

    def numericFuncs(self):
        a = self.groupedTestData
        self.multiTestData.append(
            TestDataMultiple(
                a,
                [
                    TestDataItem("multiply", a * 2.5252452, 2.5252452),
                    TestDataItem("divide", a / 8.2454225, 8.2454225),
                    TestDataItem("add", a * 9.134131, 9.134131),
                    TestDataItem("pow", a**1.134134, 1.134134),
                    TestDataItem("cumProduct", a.cumprod(), None),
                    TestDataItem("cumSum", a.cumsum(), None),
                    TestDataItem("mean", a.mean(), None),
                    TestDataItem("std", a.std(), None),
                    TestDataItem("max", a.max(), None),
                    TestDataItem("min", a.min(), None),
                    TestDataItem("minMax", [a.min(), a.max()], None),
                    TestDataItem("maxIndices", int(a.argmax()), None),
                    TestDataItem("minIndices", int(a.argmin()), None),
                ],
            )
        )

    def applyData(self):
        data: Any = {}
        for val in self.testData:
            data[val.functionName] = {"input": val.input, "output": val.value}
        for q in self.multiTestData:
            groupedData = {"input": q.input, "outputs": {}}
            for item in q.value:
                groupedData["outputs"][item.functionName] = {
                    "input": item.input,
                    "output": item.value,
                }
            data["groupedData"] = groupedData
        collectiveData["data"].append(data)


t = TestData()

if not targetPath.exists():
    print(f"Math testData.json output file at {targetPath} does not exist.")
else:
    targetPath.write_text(json.dumps(collectiveData))
    print(f"Wrote math test data to {targetPath}")
