# Project media and final review

The live project content is in the individual `.js` files in `src/data/projects/`; the Work page displays it in project dialogs. Each card needs one cover image. Each dialog includes three additional image/video briefs with exact capture instructions.

## Asset checklist

| Project | Cover | Additional media |
| --- | --- | --- |
| Out of Memory | Boss encounter with lighting and effects | Existing trailer; 15–30 second VFX/lighting clip; annotated rendering breakdown |
| EV Fleet Simulator | Fleet map with vehicles and sites | 20–40 second scenario-map walkthrough; login UI and authentication-flow diagram; annotated scenario-map breakdown |
| Viral Invaders | Active battle with health bars | Existing trailer; numbered nine-frame event spritesheet; 10–20 second health bar/event clip |
| Chai & Chain | Both players, chain, and recipe stations | Your promotional trailer; readable ingredient-list screenshot; recipe variation/movement clip |

Use landscape 16:9 covers where possible, and keep UI text readable. Capture real project footage. Caption each contribution clearly and credit team work. The on-page boxes are editorial placeholders, not uploaded media or working video players; replace them with image/video elements when assets are ready.

## Confirm before final publication

- Chai & Chain: the notes conflict between C Processing and Alpha Engine. The page uses C Processing from the detailed project header/overview. Confirm the correct framework.
- Chai & Chain: verify individual code contributions against available source. Wording currently preserves the notes’ “contributed to” scope.
- EV Fleet Simulator: marked ongoing, September 2026–April 2027. The portfolio now focuses on database-backed login and the map scenario layer, based on the updated contribution description and a source review. Legacy 3D work is omitted.
- EV Fleet Simulator: check what team/ST Engineering material can be shared; label mock data and use approved screenshots.
- Confirm repository URLs and sharing permissions before adding source links. No URLs were provided, so source buttons are omitted.
- Team sizes and durations for GAM100/150/200 were not supplied and have not been invented.
- Technical explanations stay within the supplied notes; add precise algorithms, code excerpts, or measured results only when supported by the implementation.


## Seam Carving — Algorithm Analysis

- Cover: original image and labeled greedy/graph-cut resized outputs.
- Media: energy map and seam overlay grid; annotated CMake/vcpkg setup; build and comparison walkthrough with actual timings.
- Personal contributions: task division and initial CMake/OpenCV project setup. Algorithm implementations are described as team features.
- Status is provisionally in development; confirm final course code, team name, and completion status when available.


## Python Object Detection and 3D Scene Reconstruction

- Cover: matched detection image and point-cloud view from the same photograph.
- Media: webcam detection clip; source/depth/point-cloud comparison; marker alignment clip once verified.
- Current source review: pointcloud.py uses multi_objects.jpg, while object_3d.py still uses capture.jpg. Input consistency and depth-map coordinate alignment require further integration work.
- Describe pretrained-model integration, not model training. Relative depth is uncalibrated; fixed-size boxes do not represent measured object extents.
- Live detection targets an Intel GPU through OpenVINO. The inspected depth pipeline uses CPU. Do not describe the full pipeline as GPU accelerated or live 3D reconstruction.

## Product Design and Prototyping Individual Assignment — E262

- Individual Product Design and Prototyping assignment, grade A as supplied by Alyssa.
- Media: open/folded CAD views, dimensioned details, and mechanism comparison. Pages 2–4 of E262 GA.pdf provide context.
- Described as a design study. Fabrication, load tests, and safety validation have not been established.
- CAD software is not specified: the report references a Fusion 360 hinge tutorial but does not explicitly identify the tool used for all modelling.


## QUIKNOM — RP Entrepreneurship Bootcamp

- Team concept prototype; Best Pitch recognition and 2022 date supplied by Alyssa.
- Source: eight-page QUIKNOM PDF containing app mockups, not a full pitch deck or implementation.
- Media: food-discovery flow, restaurant/booking screens, and team/award photo if available.
- Alyssa confirmed she led the group. Confirm the mockup tool and individual design/research responsibilities before adding more specific ownership claims. No recommendation algorithm, backend, bookings, payments, or delivery implementation is claimed.

- QUIKNOM update: 23.pdf contains ready-made meal business exploration, a value proposition canvas, competitor examples, and proposed social media content. It does not name QUIKNOM; the write-up distinguishes these supporting notes from the app mockups. No surveys, campaign results, or individual research authorship are claimed.
