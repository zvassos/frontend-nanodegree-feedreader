/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* "RSS Feeds" test suite */
    describe('RSS Feeds', function() {
        
        /* Tests to make sure that the allFeeds variable 
         * has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Tests to make sure that the allFeeds 
         * url is defined and that it is not
         * empty.
         */
        it('has url', function(){
           for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(0);
           }
        });


        /* Tests to make sure that the allFeeds 
         * name is defined and that it is not
         * empty.
         */
        it('has name', function(){
           for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(0);
           }
        });
    });

    /* "The menu" test suite */
    describe('The menu', function(){   
        
        /* Tests to make sure that the menu 
         * is hidden by default.
         */
        it('Menu is closed by default', function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        })

         /* Tests to make sure that the menu toggles
          * the class menu-hidden on the menu-icon-link click.
          */
        it('Menu changing visibility on click', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            $('.menu-icon-link').trigger('click');   
            expect($('body').hasClass('menu-hidden')).toEqual(true);                 
        })
    });                           
    /* "Initial Entries" test suite */
    describe('Initial Entries', function(){  
        
        /* Use Jasmine's beforeEach and done() for the 
         * asynchronous loadFeed().
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            })
        });
        
        /* Check ".feed" to see that there is atleast one entry.
         */
        it('Has atleast one entry', function(){
           expect($('.feed .entry')).toBeDefined() 
        });
    });
    /* "New Feed Selection" test suite */
    describe('New Feed Selection', function(){
        
        /* Use Jasmine's beforeEach and done() for the 
         * asynchronous loadFeed().
         */
        let feedOne, feedTwo;
        beforeEach(function(done){
            loadFeed(0, function(){
                feedOne = $('.feed').find(allFeeds.url);
                done();
            });
            loadFeed(1, function(){
                feedTwo = $('.feed').find(allFeeds.url);
                done();
            });
        });
        
        /* Check if feedOne's links are different from the 
         * links of feedTwo.
         */
        it('New feed is not the same as old one', function() {
           expect(feedOne).not.toBe(feedTwo); 
        });     
    });
    
}());
