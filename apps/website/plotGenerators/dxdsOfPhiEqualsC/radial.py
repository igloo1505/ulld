import numpy as np
import sympy as smp
import scipy.constants as spc
import plotly.graph_objects as go
import plotly.io as pio
import math
from constantsHandler.bodies.earth import Earth
from pathlib import Path
import os

pio.templates.default = "plotly_dark"

vb = spc.c * math.sqrt(1 - 1 / (1 + spc.g / Earth.radius_polar) ** 2)
delta = 2 * spc.G * Earth.mass / Earth.radius_polar**3
axisMax = vb * delta


def f(x, y, ds=axisMax):
    return np.sqrt(x**2 + y**2) / ds + abs(x) / ds * (np.sqrt(ds) - 1)


_x = np.linspace(-axisMax, axisMax, 200)
_y = np.linspace(-axisMax, axisMax, 200)

x, y = np.meshgrid(_x, _y)

fig = go.Figure()

fig.add_trace(go.Surface(x=x, y=y, z=f(x, y)))

fig.show(renderer="browser")
