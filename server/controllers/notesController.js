const Notes=require('../models/notesModel')
const User = require('../models/userModel')

const addNotes=async(req,res)=>{
    try{
        const {title,description}=req.body
        const user=req.user._id
        const obj=new Notes({title,description,user})
        const createdNote=await obj.save()
        res.status(201).json(createdNote)
    }catch(e){
        console.log(e)
        res.status(400).json({error:'Failed to create note'})
    }
}

const getNotes=async(req,res)=>{
    try{
        const user=req.user._id
        const notes=await Notes.find({user})
        res.status(201).json(notes)
    }catch(e){
        console.log(e)
        res.status(400).json({error:'Error while loading notes'})
    }
}
const getNote=async(req,res)=>{
    try{
        const itemid=req.params.id
        const user=req.user._id
        const note=await Notes.findOne({_id:itemid,user})
        if(!note){
            throw new Error('Note not found')
        }
        res.status(201).json(note)
    }catch(e){
        console.log(e)
        res.status(400).json({error:'Error while loading note'})
    }
}


const deleteNote=async(req,res)=>{
    try{
        const itemid=req.params.id
        const user=req.user._id
        const note=await Notes.findOne({_id:itemid,user})
        await Notes.findOneAndDelete({_id:itemid,user})
        res.status(201).json(note)
    }catch(e){
        console.log(e)
        res.status(400).json({error:'Error while deleting note'})
    }
}

const updateNote=async(req,res)=>{
    try{
        const {note}=req.body
        const itemid=req.params.id
        const user=req.user._id
        await Notes.findOneAndUpdate({_id:itemid,user},{note})
        const updatedNote=await Notes.findOne({_id:itemid,user})
        res.status(201).json(updatedNote)
    }catch(e){
        console.log(e)
        res.status(400).json({error:'Error while updating note'})
    }
}



module.exports={addNotes,getNotes,getNote,deleteNote,updateNote}