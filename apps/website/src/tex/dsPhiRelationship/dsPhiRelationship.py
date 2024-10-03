from typing import List, Union
import tikzpy as py_tikz
from tikzpy import pytikz
import numpy as np
import math
import scipy.constants as spc
from constantsHandler.bodies.earth import Earth
import os
import subprocess as sp
from pathlib import Path
from dataclasses import dataclass, field
from tikz import Tikz


tikz = py_tikz.pytikz()
tikz.dpi = 300


p1 = tikz.pto.pto(0, 0, 0)

p2 = tikz.pto.pto(10, 0, 0)

line = tikz.shp.line(p1, p2, color="white")
line.arrow = "->"


l1 = tikz.pto.pto(0, -0.5, 0)
l2 = tikz.pto.pto(12, -0.5, 0)

line2 = tikz.shp.line(l1, l2, color="white")

line2.arrow = "->"

tikz.shp.text(p2, "$dx^0 = dx_{\\bar{v}}$", position="right", color="white")
tikz.shp.text(
    l2,
    "$dx^\\prime = dx_{\\bar{v}} \\gamma = dx_{\\bar{v}} \\left(1 + \\delta \\right)$",
    position="right",
    color="white",
)

dsLineOffset = -1

ds1 = tikz.pto.pto(10, dsLineOffset, 0)
ds2 = tikz.pto.pto(12, dsLineOffset, 0)

dsLine = tikz.shp.line(ds1, ds2, color="white")

dsLine.type = "|-|"

midPoint = tikz.pto.pto(11, dsLineOffset - 0.25, 0)

dsLabel = tikz.shp.text(
    midPoint, "$ds = dx^\\prime - dx^0$", color="white", position="below"
)

tikzManager = Tikz(
    Path(__file__),
    tikz,
    Path("/Users/bigsexy/Desktop/current/ulld/apps/website/public/assets/diagrams/"),
)

tikzManager.generateAll(removeTex=True)
