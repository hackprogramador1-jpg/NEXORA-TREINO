import {FilesetResolver,PoseLandmarker} from "@mediapipe/tasks-vision";
let promise=null;
export function getPoseLandmarker(){if(!promise) promise=(async()=>{const vision=await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/wasm");return PoseLandmarker.createFromOptions(vision,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",delegate:"GPU"},runningMode:"VIDEO",numPoses:1,minPoseDetectionConfidence:.55,minPosePresenceConfidence:.55,minTrackingConfidence:.55})})();return promise}
export function angle(a,b,c){const ab={x:a.x-b.x,y:a.y-b.y},cb={x:c.x-b.x,y:c.y-b.y},m=Math.hypot(ab.x,ab.y)*Math.hypot(cb.x,cb.y);if(!m)return null;return Math.round(Math.acos(Math.max(-1,Math.min(1,(ab.x*cb.x+ab.y*cb.y)/m)))*180/Math.PI)}
export function avg(a,b){return a==null?b:b==null?a:(a+b)/2}
