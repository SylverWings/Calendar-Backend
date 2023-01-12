const Event = require('../models/Event')


const eventController = {};

eventController.getAll = async(req, res) =>{

    try {
        const events = await Event.find().populate('userId', );

        return res.status(200).json({
            success: true,
            message: "Get all Events retrivered successfully",
            data: events
        })
    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: "Error trying to get Events",
            error: error?.message || error
        })
    }
}

eventController.create = async(req, res) =>{

    const event = new Event( req.body );

    try {

        event.userId = req.user_id;
        
        const newEvent = await event.save();
        console.log(newEvent)

        return res.status(200).json({
            success: true,
            message: 'New event created',
            event: newEvent,
        })
        

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error when you try to make a new Event',
            error: error?.message || error
        })
    }
};

eventController.update = async(req, res) =>{

    const eventId = req.params.id;
    const userId = req.user_id

    try {
        
        const event = await Event.findById(eventId)

        if(!event){
            return res.status(404).json({
                success: false,
                message: "The Event doesn't exist"
            })
        }

        if(event.userId.toString() !== userId){
            return res.status(401).json({
                success: false,
                message: "You don't have permission to edit this Event"
            })
        }

        const update = {
            ...req.body,
            userId
        }

        const updateEvent = await Event.findOneAndUpdate(eventId, update, {new: true});

        return res.status(200).json({
            success: true,
            message: 'Event update successfully',
            data: updateEvent
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error trying to update Event",
            error: error?.message || error
        })
    }
};

eventController.delete = async(req, res) =>{

    try {
        const filter = {
            userId: req.user_id,
            _id: req.params.id
        }
        
        const eventDeleted = await Event.findOneAndDelete(filter);

        return res.status(200).json({
            success: true,
            message: 'Event deleted',
            data: eventDeleted
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error trying to delete Event",
            error: error?.message || error
        })
    }
};

module.exports = eventController;