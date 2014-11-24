var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var Client = require('node-rest-client').Client;
var client=new Client();

var bodyParser = require('body-parser');
var http = require('http');
var app = express();
var server=http.createServer(app);
var io = require('socket.io').listen(server);
var io = io.listen(server);
var Array = require('node-array');


var a=new Array();
var lobby_array=new Array();
var auction_array=new Array();
// var subset=new Array();
    var header={
    "X-Moback-Application-Key":"YmNmZDJjMDUtYzJhNS00MTA3LTkwNjgtNDM1MzI2ZWNlNzA4",
    "X-Moback-Environment-Key":"MDI0NDQ5ODktYTAwNy00ZjhhLWFlMDktMmY4ODMzNDdhODgw",
    "X-Moback-SessionToken-Key":"dWRheW4rMUByZWxpYWJsZWNvZGVycy5jb20jLTEjMTQxMTYzNDQ1NTAwMDg2NDAwMDAw",
    "Content-Type": "application/json"
    };

    var global={
        gameStarted:'',
        popUpTimeStarted:'',
        popUpTimeFinished:'',
        positionChanged:''
    };
    
    var fantasy_data_obj={
        headers:header
    };

    client.get('https://api.moback.com/objectmanager/api/object/getCount/fantasy_data',fantasy_data_obj,function(data,response){
    console.log(data);
    if(data.object>0){   
        console.log('ready');
    }
    else{
        // Pulling data from Fantasy Nerd database
        
        //Quarter Back
        
        client.get('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/7njxj3tcb6h3/QB/10/',function(data,response){
               console.log(data);
               
               var length=data.Rankings.length;
                // // console.log(data.Players.length);
                for(var i=0;i<length;i++){
                    var player_data={
                        "playerId":data.Rankings[i].playerId,
                        "displayName":data.Rankings[i].name,
                        "position":data.Rankings[i].position,
                        "team":data.Rankings[i].team,
                        "ppr":data.Rankings[i].ppr
                    };
                    console.log(player_data);
                    var args = {        
                       data:{
                        "table":"fantasy_data",
                        "data":player_data
                        },
                        headers:header
                      };
                       
                client.put("https://api.moback.com/objectmanager/api/object/create", args, function(data,response){
                    console.log(data);
                });  
            }
                
        });
    
    
        //Running Back
        
        client.get('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/7njxj3tcb6h3/RB/10/',function(data,response){
               console.log(data);
               
               var length=data.Rankings.length;
                // // console.log(data.Players.length);
                for(var i=0;i<length;i++){
                    var player_data={
                        "playerId":data.Rankings[i].playerId,
                        "displayName":data.Rankings[i].name,
                        "position":data.Rankings[i].position,
                        "team":data.Rankings[i].team,
                        "ppr":data.Rankings[i].ppr
                    };
                    console.log(player_data);
                    var args = {        
                       data:{
                        "table":"fantasy_data",
                        "data":player_data
                        },
                        headers:header
                      };
                       
                client.put("https://api.moback.com/objectmanager/api/object/create", args, function(data,response){
                    console.log(data);
                });  
            }
                
        });
    
        //Wide Receivers
        
        client.get('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/7njxj3tcb6h3/WR/10/',function(data,response){
           console.log(data);
           
           var length=data.Rankings.length;
            // // console.log(data.Players.length);
            for(var i=0;i<length;i++){
                var player_data={
                    "playerId":data.Rankings[i].playerId,
                    "displayName":data.Rankings[i].name,
                    "position":data.Rankings[i].position,
                    "team":data.Rankings[i].team,
                    "ppr":data.Rankings[i].ppr
                };
                console.log(player_data);
                var args = {        
                   data:{
                    "table":"fantasy_data",
                    "data":player_data
                    },
                    headers:header
                  };
                   
            client.put("https://api.moback.com/objectmanager/api/object/create", args, function(data,response){
                console.log(data);
            });  
        }
            
    });
    
    // Tight End

    client.get('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/7njxj3tcb6h3/TE/10/',function(data,response){
           console.log(data);
           
           var length=data.Rankings.length;
            // // console.log(data.Players.length);
            for(var i=0;i<length;i++){
                var player_data={
                    "playerId":data.Rankings[i].playerId,
                    "displayName":data.Rankings[i].name,
                    "position":data.Rankings[i].position,
                    "team":data.Rankings[i].team,
                    "ppr":data.Rankings[i].ppr
                };
                console.log(player_data);
                var args = {        
                   data:{
                    "table":"fantasy_data",
                    "data":player_data
                    },
                    headers:header
                  };
                   
            client.put("https://api.moback.com/objectmanager/api/object/create", args, function(data,response){
                console.log(data);
            });  
        }
            
    });
    
    // Kicker
    
    client.get('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/7njxj3tcb6h3/K/10/',function(data,response){
           console.log(data);
           
           var length=data.Rankings.length;
            // // console.log(data.Players.length);
            for(var i=0;i<length;i++){
                var player_data={
                    "playerId":data.Rankings[i].playerId,
                    "displayName":data.Rankings[i].name,
                    "position":data.Rankings[i].position,
                    "team":data.Rankings[i].team,
                    "ppr":data.Rankings[i].ppr
                };
                console.log(player_data);
                var args = {        
                   data:{
                    "table":"fantasy_data",
                    "data":player_data
                    },
                    headers:header
                  };
                   
            client.put("https://api.moback.com/objectmanager/api/object/create", args, function(data,response){
                console.log(data);
            });  
        }
    });
    
    // Defense
    client.get('http://www.fantasyfootballnerd.com/service/weekly-rankings/json/7njxj3tcb6h3/DEF/10/',function(data,response){
           console.log(data);
           var length=data.Rankings.length;
            // // console.log(data.Players.length);
            for(var i=0;i<length;i++){
                var player_data={
                    "playerId":data.Rankings[i].playerId,
                    "displayName":data.Rankings[i].name,
                    "position":data.Rankings[i].position,
                    "team":data.Rankings[i].team,
                    "ppr":data.Rankings[i].ppr
                };
                console.log(player_data);
                var args = {        
                   data:{
                    "table":"fantasy_data",
                    "data":player_data
                    },
                    headers:header
                  };
                   
            client.put("https://api.moback.com/objectmanager/api/object/create", args, function(data,response){
                console.log(data);
            });  
        }
     });       
    
    } 
  });


io.on('connection',function(socket){
	
	console.log('socket connected');
	
	socket.on('add_user',function(data){
		io.sockets.emit('user_array',a);
	});

	socket.on('slot_number',function(data){
		io.sockets.emit('check_slot',data);
	});
	
	socket.on('main_counter',function(data){
		io.sockets.emit('current_counter',data);
	});

	socket.on('card_counter',function(data){
		console.log(data);
		io.sockets.emit('current_card_counter',data);
	});
	
	var user_exists=0;
	/*Player Join lobby*/
	socket.on('lobby_user',function(data){
		var user_email=data.email;
		for(var i=0;i<lobby_array.length;i++){
			if(lobby_array[i].email==user_email){
				user_exists=user_exists+1;
			}
		}
		
		if(user_exists==0){
			lobby_array.push(data);
		}
		
		console.log(lobby_array);
	  	io.sockets.emit('lobby_users',lobby_array);
	});

	
	socket.on('user_token',function(data){
		console.log(data);
		// io.sockets.emit('current_card_counter',data);
	});
	
	socket.on('currentUser',function(data){
		a.push(data);
		console.log(a);
		io.sockets.emit('lobby_users',data);
	});
	
	var auction_user_exists=0;
	socket.on('auction_user',function(data){
		var user_email=data.email;
		for(var i=0;i<auction_array.length;i++){
			if(auction_array[i].email==user_email){
				auction_user_exists=auction_user_exists+1;
			}
		}
		if(auction_user_exists==0){
			auction_array.push(data);
		}
		console.log(auction_array);
		io.sockets.emit('auction_user',auction_array);
	});
	
	 socket.on('check', function (data) { 
	    io.sockets.emit('checked',global.popUpTimeFinished);
	});
	
	socket.on('disconnect', function(user){
	    console.log( socket.id +' disconnected');
	});
	
	
	app.post('/lobby',function(req,res){
		res.send(a);
		io.sockets.emit('user_array',a);
	});
	
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var routes = require('./routes/index');
var users = require('./routes/users');
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use('/', routes);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register',function(req,res){
	console.log(a);
	var data=JSON.stringify(req.body);
	var user_data=JSON.parse(data);
	// console.log(data);
	
	var args = {		
    		  data:{
      			"table": "users",
      			"data":{
    			  "codename":user_data.codename,
        	      "username":user_data.email,
    	  		  "email": user_data.email,
    	  		  "password":user_data.password
    			  }
     	   	  },
    	  	  headers:header
	  	};
		
		console.log(args);
		
		var check_args={
  		  data:{
  			  "table":"users",
  			  "data":"",
  			  "order":{"Name":1},
  			  "criteria":{"email":user_data.email},
  			  "skip":0,
  			  "limit":"10"
  		  },
		   headers:header
		};
		
		client.post("https://api.moback.com/objectmanager/api/object/getAll", check_args, function(data,response){
			if(data.object.length==0){
				
				console.log('Never registered before..Registration can go through');
				
				client.put("https://api.moback.com/objectmanager/api/object/create", args, function(data,response){
					 console.log(data);
					 
					 console.log(data.object);
					 var registration_object={
						 'email':data.object.email,
						 'username':data.object.username,
						 'codename':data.object.codename
					 };
					 if(data.code==1000){
						res.send(registration_object);
					 }
				});
			}else{
				console.log('Already registered User');
				res.send('Already registered User. Please login using your credentials');
			}
		});
});

app.post('/login',function(req,res){
	var credentials=JSON.stringify(req.body);
	var login_data=JSON.parse(credentials);
	var user_login={
		  data:{
			  "table":"users",
			  "data":"",
			  "order":{"Name":1},
			  "criteria":{"email":login_data.email},
			  "skip":0,
			  "limit":"10"
		  },
	  	  headers:header
	 };
	 
	client.post("https://api.moback.com/objectmanager/api/object/getAll", user_login, function(data,response){
		
		 var login_object={
		 	 'email':data.object[0].email,
			 'username':data.object[0].username,
			 'codename':data.object[0].codename
		 };
		 
   		 if(data.object.length==0){
			console.log('invalid credentials');
		 }
		 
		 if(data.code==1000){
		 	res.send(login_object);
		 }
	});
});

 var position_Array=[];

 app.post('/auction',function(req,res){
     console.log(req.body.position);
     var position=req.body.position;
    if(global.popUpTimeStarted==""){
        global.popUpTimeStarted="true";
        console.log('pop up set');
        var pop_count=6;
        var popup_counter=setInterval(popup_timer, 1000); //1000 will  run it every 1 second
        function popup_timer()
         {
            pop_count=pop_count-1;
            console.log(pop_count);
            io.sockets.emit('popup_counter',pop_count);
            if (pop_count == 0)
              {
                 io.sockets.emit('popup_message','finished');
                 global.popUpTimeFinished="true";
                 
                 clearInterval(popup_counter);
                 //counter ended, do something here
                    if(global.gameStarted==""){
                        global.gameStarted="true";
                        console.log('just set');
                        var count=31;
                        var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
                        function timer()
                        {
                          count=count-1;
                          
                          io.sockets.emit('main_counter',count);
                          // socket.on('current_counter',function(count){
                            if (count == 0)
                              {
                                 io.sockets.emit('close_round','close');
                                 global.popUpTimeStarted="";
                                 global.gameStarted="";
                                 clearInterval(counter); 
                                 //counter ended, do something here
                                 return;
                              }                
                         }
                    }
                    else{
                        console.log('gameAlreadyStarted');
                    }
                }
            }    
        }
        
	var auction={
		  data:{
			  "table":"fantasy_data",
			  "data":"",
			  "order":{"Name":1},
			  "criteria":{"position":position},
			  "skip":0,
			  "limit":"20"
		  },
	  	  headers:header
	 };

	client.post("https://api.moback.com/objectmanager/api/object/getAll",auction, function(data,response){
		res.send(data.object);
		for(var i=0;i<data.object.length;i++){
		    var con={
		        "card_id":i+1,
		        "displayName":data.object[i].displayName,
		        "playerId":data.object[i].playerId,
		        "position":data.object[i].position,
		        "current_highest_bid":""
		    };
		    // console.log(con);
		    position_Array.push(con);
		}
		// console.log(position_Array[1]);
	});
});
    
// catch 404 and forward to error handler

server.listen(3200);
module.exports = app;