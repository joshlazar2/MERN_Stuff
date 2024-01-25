const Album = require('../models/album.model');
const jwt = require("jsonwebtoken");

module.exports = {
    findAllAlbums: (req, res) => {
        Album.find()
            .then((allAlbums) => {
                res.status(200).json(allAlbums)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    // createAlbum: (req, res) => {
    //     Album.create(req.body)
    //         .then((newAlbum) => {
    //             res.status(200).json(newAlbum)
    //         })
    //         .catch((err) => {
    //             res.status(400).json(err)
    //         })
    // },

    createAlbum: async (req, res) => {
        try{
            console.log('REQ BODY', req.body)
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            console.log('Decoded JWT', decodedJwt);
            const album = {...req.body, user_id:decodedJwt.payload._id}
            console.log('Finalized Album', album)
            const newAlbum = await Album.create(album);
            res.status(200).json(newAlbum)
        }
        catch(err){
            res.status(400).json(err)
        }
    },

    allAlbumsByLoggedInUser: async (req, res) => {
        try{
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            // console.log('Decoded JWT', decodedJwt);
            const user_id = decodedJwt.payload._id
            const albums = await Album.find({ user_id: user_id })
            res.status(200).json(albums)
        }
        catch(err){
            res.status(400).json(err)
        }
    },

    findOneAlbum: (req, res) => {
        Album.findOne({ _id: req.params.id })
            .then((oneAlbum) => {
                res.status(200).json(oneAlbum)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    updateAlbum: (req, res) => {
        Album.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedAlbum) => {
                res.status(200).json(updatedAlbum)
            })
            .catch((err) => {
                res.status(400).json(err)
            })

    },

    deleteAlbum: (req, res) => {
        Album.deleteOne({ _id: req.params.id })
            .then(result => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }
}
