export const defaultPythonSampleCode = `import numpy as np
import numpy.typing as npt
import sympy as smp
from dataclasses import dataclass, field
from typing import List

@dataclass
class Vector:
   coords: npt.ArrayLike[float] = field(default_factory: [0, 0, 0])
   deltas: npt.ArrayLike[float] = field(default_factory: [1, 0, 0])

   def dot(self, v: Vector):
       return self.deltas * v.deltas
`
