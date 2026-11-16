/** @type {import('./types').Project} */
const project = {
  github: 'https://github.com/alyssa-alejandro/3d-vision-gpu',
  summary: "A Python experiment combining object detection and estimated 3D geometry.",
  highlights: ["Integrated YOLO/OpenVINO detection and Depth Anything V2.","Built coloured point clouds with downsampling and PLY export.","Object alignment is in progress; depth is uncalibrated."],
  solo: true,
  id: 'python-3d-vision', category: 'PERSONAL PROJECT / COMPUTER VISION', title: 'Object Detection & 3D Scene Reconstruction',
  description: 'A Python exploration of GPU-assisted object detection and depth-estimated point clouds, with object-to-scene alignment in development.',
  role: 'Personal Project Developer', team: 'Independent project', status: 'In development',
  technologies: 'Python · OpenCV · YOLO11 · OpenVINO · Depth Anything V2 · Open3D · NumPy',
  cover: 'Pair a labeled YOLO detection image with a point-cloud view generated from the same photograph. Identify the reconstruction as estimated relative geometry.',
  overview: 'This personal project explores how 2D object detection and monocular depth estimation can support a 3D scene visualisation. I use pretrained YOLO11 for detection, Depth Anything V2 for relative depth, and Open3D for coloured point clouds. Separate scripts handle live webcam detection, still-image reconstruction, and experimental object markers. Bringing these parts into a consistent pipeline is ongoing.',
  contributions: [
    'Live object detection — Built a webcam loop with OpenCV and pretrained YOLO11, using an OpenVINO model targeting an Intel GPU. The preview displays detection boxes and a frame-rate overlay.',
    'Depth-to-point-cloud processing — Used pretrained Depth Anything V2 predictions, converted relative depth into pseudo-distance, and projected image pixels into a coloured point cloud using approximate camera parameters.',
    'Point-cloud reduction and export — Added voxel-grid downsampling and exported dense and reduced point clouds as PLY files for Open3D inspection.',
    'Experimental object localisation — Combined detection-box centres with median depth samples to estimate marker positions. Added red markers and fixed-size green boxes as visual aids; alignment testing remains ongoing.',
    'Inference benchmarking — Wrote an OpenVINO benchmark with warm-up runs and repeated timed inference to explore device performance. No measured speedup is claimed here.',
  ],
  spotlight: {
    title: 'Keeping detections and reconstructed geometry consistent',
    approach: 'The detection and reconstruction scripts must use the same image, pixel dimensions, depth conversion, and projection convention for markers to align. The point-cloud script resizes depth predictions to the image dimensions and projects pixels using approximate intrinsics. The marker script samples median depth around detection centres. Integration testing is still addressing input-image consistency, depth-map alignment, and scene visibility.',
    takeaway: 'I am learning how pretrained vision models connect to geometric processing and interactive visualisation. Monocular relative depth and approximate camera parameters produce illustrative geometry rather than calibrated physical distances. The fixed-size object boxes are display aids rather than recovered object dimensions.',
  },
  media: [
    { kind: 'Video', title: 'Live detection demonstration', brief: 'Record 15–30 seconds of the existing webcam detection preview with labels, bounding boxes, and the FPS overlay. State the device and model used. Keep this demonstration distinct from the still-image 3D experiments.' },
    { kind: 'Image', title: 'Image, depth, and point cloud', brief: 'Show the same source photograph, its relative-depth visualisation, and its coloured point cloud side by side. Add dense and downsampled point counts from an actual run. Label the geometry as uncalibrated.' },
    { kind: 'Video', title: 'Object alignment experiment', brief: 'Once alignment works, orbit the point cloud with the red object markers and green boxes visible. Show the matching detection image and explain that the boxes use fixed dimensions. Until then, label this experiment as in development.' },
  ],
};

export default project;
