

module.exports.home = function(req,res){
    res.render('index',{title:'The Data Analysis Agency'})
}

module.exports.about = function(req,res){
    res.render('about',{title:'about'});
}


module.exports.contact = function(req,res){
    res.render('contact',{title:'contact'});

}

module.exports.error = function(req,res){
    res.render('error',{title:'error'});
}

module.exports.forgotpassword = function(req,res){
    res.render('forgot-password',{title:'forgot-password'});
}

module.exports.layout = function(req,res){
    res.render('layout',{title:'layout'});
}

module.exports.login = function(req,res){
    res.render('login',{title:'login'});
}

module.exports.register = function(req,res){
    res.render('register',{title:'register'});
}


