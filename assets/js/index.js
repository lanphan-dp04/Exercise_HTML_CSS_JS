import { handleSlider } from "./slider.js";
import { handleRenderActive } from "./domConcern.js";
import { handleClickVideo } from "./domShowVideo.js";
import { renderCampus } from "./domCampus.js";
import { renderCourses } from "./domMustHave.js";

// have-must
renderCourses();
// main-campus
renderCampus();
handleRenderActive();
handleClickVideo();
handleSlider();
