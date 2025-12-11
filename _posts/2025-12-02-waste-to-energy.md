---
layout: distill
title: Turning Waste Into Power: A New Pathway for Affordable Clean Energy in Developing Regions
description: Insights from our newly published research in The Journal of Engineering (IET/Wiley)

tags: SmartHome,  Optimization, LoadScheduling
# giscus_comments: false
date: 2025-12-02
featured: true
mermaid:
  enabled: true
#   zoomable: false
# code_diff: false
# map: false
# chart:
#   chartjs: false
#   echarts: false
#   vega_lite: false
# tikzjax: false
# typograms: false

authors:
  - name: Arafat Ibne Ikram
    url: "https://scholar.google.com/citations?user=gml3L4MAAAAJ"
    affiliations:
      name: RA, IIUC, Bangladesh
      
 - name: Md. Sajjad-Ul Islam & Md. Arafat Bin Zafar
    url: "https://scholar.google.com/citations?user=lAH2jIwAAAAJ&hl=en"
     affiliations:
       name: MS, FaU, Germany
  - name: Md. Rashidul Islam
    url: "[https://scholar.google.com/citations?user=IrQqEgIAAAAJ&hl=en](https://scholar.google.com/citations?user=oalwkycAAAAJ&hl=en)"
    affiliations:
      name: Assistant Professor, NSTU, Bangladesh
  - name: Dr. Md Shafiullah
    url: "https://scholar.google.com/citations?user=IrQqEgIAAAAJ&hl=en"
    affiliations:
      name: Assistant Professor, KFUPM, Saudi Arabia

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Foundation
  - name: Challenges
  - name: Proposed Solution
    subsections:
      - name: Solar Panel Modeling
      - name: Battery Storage System
      - name: Load Classification
  - name: Optimization Techniques
    subsections:
      - name: Particle Swarm Optimization
      - name: Real-Coded Genetic Algorithm
  - name: Final Outcomes
  - name: Future Directions
  - name: Closure

#   - name: Leaflet
#   - name: Chartjs, Echarts and Vega-Lite
#   - name: TikZ
#   - name: Typograms
#   - name: Layouts
#   - name: Other Typography?

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }
---

## Foundation

As the global demand for clean and reliable energy surges, developing countries continue to face unique challenges: rising consumption, unstable grids, and mounting waste generation. Traditional fossil-fuel solutions are no longer viable—economically or environmentally. This is where hybrid microgrids powered by renewables and waste-to-energy (WtE) technologies offer a transformative opportunity.

Our newly published research, “Cost-Effective Optimal Integration of Renewable Energy and Waste-to-Energy Technologies,” presents a cutting-edge optimization framework designed to build cleaner, cheaper, and more reliable microgrids for regions with limited energy access.

---


## Why We Conducted This Study

Bangladesh, like many developing nations, faces three major hurdles:
- Growing electricity demand
- Dependence on fossil fuels
- Increasing municipal solid waste

Remote communities such as Halishahar in Chattogram often rely on expensive diesel generators or unstable grid connections. At the same time, the area generates hundreds of tons of waste daily—an untapped energy resource.

Our goal was to design a practical, real-world solution that:
- Minimizes energy cost
- Reduces carbon emissions
- Utilizes local renewable and waste resources
- Ensures a continuous electricity supply


---


## Proposed Solution

Our proposed microgrid combines five energy technologies:
- Solar PV 🌞
- Wind Turbines 🌬
- Waste-to-Energy (FastOx Gasification) ♻️
- Battery Energy Storage 🔋
- Diesel Generator (backup only) ⚙️

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/islam2025cost.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    System Diagram.
</div>

To find the most cost-effective configuration, we applied two advanced optimization algorithms:
- Particle Swarm Optimization (PSO)
- Grey Wolf Optimization (GWO)
- We also benchmarked results using HOMER, the industry-standard microgrid design software.

---


## Key Findings

### 1. WtE Dramatically Lowers Energy Cost
Integrating WtE reduced the system’s Levelized Cost of Energy (LCoE):
− 22.6% compared to systems without WtE
− 52.8% compared to HOMER’s baseline

### 2. GWO Produced the Best Overall Performance
LCoE Results:
🟢 GWO: $0.221/kWh
🔵 PSO: $0.223/kWh
🔴 HOMER: $0.468/kWh
GWO achieved the optimum 10× faster than PSO.

### 3. PSO Achieved the Lowest Carbon Emissions
PSO reduced annual CO₂ emissions to 27,177 tons, outperforming both GWO and HOMER.

### 4. Solar + WtE = Most Reliable Combination
Annual energy contributions:
- Solar: ~70,000+ MWh
- WtE: ~63,000 MWh
- Wind: Lower (location dependent)

### 5. Real-World Case Study: Halishahar
Using NASA meteorological data, PGCB load data, and local waste profiles, our microgrid met:
- 107,150 MWh annual demand reliably
- With renewable-driven generation


### Environmental Impact
Annual CO₂ emissions:
- PSO: 27,177 tons
- GWO: 33,702 tons
- HOMER baseline: 35,693 tons
Both optimized systems show major emission reductions.

---

## Why This Study Matters

This research provides a scalable blueprint for solving dual challenges of energy scarcity and waste management.

It can benefit:
- Remote islands
- Off-grid rural communities
- Urban areas with high waste production
- Disaster-prone regions needing resilient energy
It demonstrates that waste is not a burden—it's a resource.

---


## Final Thoughts

Our work shows that WtE-integrated renewable microgrids can deliver stable, low-cost, and environmentally friendly electricity—especially in developing regions.

The combination of optimization algorithms (GWO & PSO) and real-world data provides a dependable framework for future microgrid planning.






---

Interested in the full paper? Check out the original research here ([link to the paper](https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/tje2.70148)).
