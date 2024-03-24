
const providers = require('../models/providers')


module.exports.list=function(req,res){
    res.render('providers/providers-list',{ title :'providers' ,providers : 
    providers })
}


module.exports.details=function(req,res){
    let id =req.params.id;
    let provider = providers.find( provider => provider.id == id )
    res.render('providers/providers-details', { id:id , title : 
        'Providers details service', company : provider.company})
}


/* For Edit Providers Details */

module.exports.edit=function(req,res){
    let id =req.params.id;  /* Params use for get method */
    let provider = providers.find( provider => provider.id == id )      

    res.render('providers/providers-edit', { id:id , title : 
        'Providers Edit Details', provider : provider})
}


/* For update Providers Details */

module.exports.update=function(req,res){
    let id =req.params.id;
    let provider = providers.find( provider => provider.id == id )

    provider.firstname = req.body.firstname;  /* Body use for post method */
    provider.lasttname = req.body.lastname; 
    provider.position = req.body.position; 
    provider.company.company_name = req.body.company_name;
    provider.company.address = req.body.address; 
    provider.company.address2 = req.body.address2; 
    provider.company.city = req.body.city; 
    provider.company.state=req.body.state;
    provider.company.postal_code = req.body.postal_code;
    provider.company.phone = req.body.phone;
    provider.company.email = req.body.email; 
    provider.company.description=req.body.description;
    provider.company.tagline = req.body.tagline;

    res.render('providers/providers-update', {  title : 'Providers Details updated'})
}


