const express = require('express');
const path = require('path');

const {
    sendWorkshops,
    sendWorkshopById,
    addWorkshops,
    updateWorkshopById,
    deleteWorkshopById,
    sendSessionsForWorkshopById,
    addSessionsForWorkshopById
} = require('../../controllers/workshops');

const router = express.Router();

router.get('/',sendWorkshops);
router.get('/:id',sendWorkshopById);
router.post('/',addWorkshops);
router.patch('/:id',updateWorkshopById);
router.delete('/',deleteWorkshopById);

router.get('/:id/sessions',sendSessionsForWorkshopById);
router.patch('/:id/sessions',addSessionsForWorkshopById);

module.exports = router;