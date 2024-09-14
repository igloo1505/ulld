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
print(vb)

maxDx = vb

_dx = np.linspace(0, maxDx, 200)
_phi = np.linspace(-2 * math.pi, math.pi * 2, 200)

# title = r"$f_{(\dot{x},\phi,ds)} & = \frac{dx}{ds} + \cos{(\phi)} \frac{dx}{ds} \left( \sqrt{ds} - 1 \right)$"

delta = 2 * spc.G * Earth.mass / Earth.radius_polar**3


def f(dx, phi, ds):
    return dx / ds + np.cos(phi) * dx / ds * (np.sqrt(ds) - 1)


dx, phi = np.meshgrid(_dx, _phi)

fig = go.Figure()

fig.add_trace(go.Surface(x=dx, y=phi, z=f(dx, phi, delta)))

fig.update_layout(
    # title=title,
    scene=dict(
        xaxis=dict(title=dict(text="dx")),
        yaxis=dict(title=dict(text="phi")),
        zaxis=dict(title=dict(text="f")),
    ),
)

fig.show(renderer="browser")

htmlPath = f"{os.environ["ULLD_DEV_ROOT"]}/apps/website/generatedContent/plots/fOfdxdsphiEqualsc.html"

fig.write_html(htmlPath)
