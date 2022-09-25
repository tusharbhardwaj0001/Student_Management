import  Express  from "express";
// import student from "../models/student.js";
import { getStudents, createStudent, deleteStudent} from "../controllers/student.js";
const router = Express.Router();

router.get("/",getStudents);
router.post("/",createStudent);
router.delete("/:id",deleteStudent);


export default router;