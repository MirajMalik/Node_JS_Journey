const contacts = require('./Contacts').default

exports.getAllContacts = (req,res)=>{
    res.json(contacts.getAllContacts())

}


exports.createContact = (req,res)=>{
    // console.log(req.body)
    let{name,phone,email} = req.body
    let contact = contacts.createContact({
        name,
        phone,
        email

    })

    res.json(contact)

}

