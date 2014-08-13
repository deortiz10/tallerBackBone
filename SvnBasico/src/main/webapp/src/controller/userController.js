/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            var nom, apell, dat;
            nom= document.getElementById("Mi Nombre es").value;
            apell= document.getElementById("Mi apellido es").value;
            dat= document.getElementById("Naci").value;
            var model = $('#userForm').serializeObject();
            document.write("Hola mi nombre es "+nom+"  "+ apell+"Naci el"+dat);
            //document.getElementById("msj").innerHTML="<div class=\"alert alert-succes\"> Hola mi nombre es "+nom+"  "+ apell+"Naci el"+dat+"</div>";            
           // document.write().innerHTML="<div class=\"alert alert-succes\"> Hola mi nombre es "+nom+"  "+ apell+"Naci el"+dat+"</div>";
            alert('saved model: '+ model.toString());
           
        },
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        }
    });

