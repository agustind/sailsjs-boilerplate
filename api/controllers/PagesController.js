module.exports = {
    
    about: function (req, res) {
        return res.view('about');
        //return res.send('This is the about page');
        },

        index: function(req, res){
            
            
            Page.find().populate('user').exec(function (err, pages){
                console.log('pages:');
            	console.log(pages);
                return res.view('pages/index', {pages: pages});
        	});

        },

        redir_home: function (req, res) {
            return res.redirect('/');
        }
        
};

