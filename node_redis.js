var redis = require('redis');
var bcrypt = require('bcrypt');
var db = redis.createClient();

function User(obj){
  Object.assign(this,obj);
}

User.prototype.save = function(fn){
    if(this.id){
        this.update(fn);
    }
    var user = this;
    db.incr('user:ids',function(err,id){       //获取自增id
        if(err) return fn(err);
        user.id = id;
        user.hasPassword(function(err){
            if(err) return fn(err);
            user.update(fn);
        })
    })
};
User.prototype.update = function(fn){
    var user = this;
    var id = user.id;
    db.set('user:id:'+user.name,id,function(err){     //redis set集合
        if(err) return fn(err);
        db.hmset('user:'+id,user,function(err){       //保存
            fn(err);
        });
    })
};
User.prototype.hasPassword = function(fn){
    var user = this;
    bcrypt.genSalt(16,function(err,salt){
        if(err) return fn(err);
        user.salt = salt;
        bcrypt.hash(user.pass,salt,function(err,hash){
            if(err) return fn(err);
            user.pass = hash;
            fn();
        })
    })
};

var tobi = new User({
    name : 'swen',
    pass:'123swen',
    age:24
});
tobi.save(function(err){
    if(err) throw err;
    console.log('user id %d',tobi.id);
});
