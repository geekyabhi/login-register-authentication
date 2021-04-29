const router=require('express').Router()
const { protect } = require('../middleware/authMiddleware')
const {addNotes,getNotes,getNote,deleteNote,updateNote}=require('../controllers/notesController') 

router.route('/').post(protect,addNotes)
router.route('/').get(protect,getNotes)
router.route('/:id').get(protect,getNote).delete(protect,deleteNote).put(protect,updateNote)

module.exports=router