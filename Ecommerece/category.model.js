import mongoose from 'mongoose'

const CategorySchema=new mongoose.Schema();

export const Category=mongoose.model('Category',CategorySchema)