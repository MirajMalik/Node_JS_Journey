
const router = require('express').Router()

const {
    getAllContacts,
    createContact,
    getContactsById
} = require('./contactController')

router.get('/',getAllContacts)

router.post('/',createContact)

router.get('/:id',getContactsById)
// router.put('/:id')
// router.delete('/:id')

module.exports = router




