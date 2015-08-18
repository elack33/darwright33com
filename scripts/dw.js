$(document).ready(function() {
    //click remove .hidden class to show video demos
    $('#btnHangman').click(function(event) {
        event.preventDefault();
        //$('#vidHangman').removeClass('hidden');
        if ($('#vidHangman').hasClass( "hidden" ) === true && ($('#vidMovieSearch').hasClass('hidden') === false ||
            $('#vidTinyAdventureGame').hasClass('hidden') === false || $('#vidCarRemote').hasClass('hidden') === false)) {

            $('#vidHangman').removeClass('hidden');
            $('#vidMovieSearch').addClass('hidden');
            $('#vidTinyAdventureGame').addClass('hidden');
            $('#vidCarRemote').addClass('hidden');

            $('#space_Hangman').switchClass('spacer','selected');
            $('#space_MovieSearch').switchClass('selected', 'spacer');
            $('#space_TinyAdventureGame').switchClass('selected', 'spacer');
            $('#space_CarRemote').switchClass('selected', 'spacer');

        }

        //else if ($('#vidHangman').hasClass( "hidden" ) === true){
        //    console.log('truth!');
        //    $('#vidHangman').removeClass('hidden');
        //}
        //else {
        //    $('#vidHangman').addClass('hidden');
        //}
    });
    $('#btnMovieSearch').click(function(event) {
        event.preventDefault();
        //$('#vidMovieSearch').removeClass('hidden');
        if ($('#vidMovieSearch').hasClass('hidden') === true && ($('#vidHangman').hasClass('hidden') === false ||
            $('#vidTinyAdventureGame').hasClass('hidden') === false || $('#vidCarRemote').hasClass('hidden') === false)){
            $('#vidMovieSearch').removeClass('hidden');
            $('#vidHangman').addClass('hidden');
            $('#vidTinyAdventureGame').addClass('hidden');
            $('#vidCarRemote').addClass('hidden');

            $('#space_MovieSearch').switchClass('spacer','selected');
            $('#space_Hangman').switchClass('selected', 'spacer');
            $('#space_TinyAdventureGame').switchClass('selected', 'spacer');
            $('#space_CarRemote').switchClass('selected', 'spacer');
        }

        //else if ($('#vidMovieSearch').hasClass('hidden') === true) {
        //    $('#vidMovieSearch').removeClass('hidden');
        //}
        //else {
        //    $('#vidMovieSearch').addClass('hidden');
        //}
    });
    $('#btnTinyAdventureGame').click(function(event) {
        event.preventDefault();
        //$('#vidTinyAdventureGame').removeClass('hidden');
        if ($('#vidTinyAdventureGame').hasClass('hidden') === true && ($('#vidHangman').hasClass('hidden') === false ||
            $('#vidMovieSearch').hasClass('hidden') === false || $('#vidCarRemote').hasClass('hidden') ==  false)){
            $('#vidTinyAdventureGame').removeClass('hidden');
            $('#vidHangman').addClass('hidden');
            $('#vidMovieSearch').addClass('hidden');
            $('#vidCarRemote').addClass('hidden');

            $('#space_TinyAdventureGame').switchClass('spacer','selected');
            $('#space_Hangman').switchClass('selected', 'spacer');
            $('#space_MovieSearch').switchClass('selected', 'spacer');
            $('#space_CarRemote').switchClass('selected', 'spacer');
        }

        //else if ($('#vidTinyAdventureGame').hasClass('hidden') === true) {
        //    $('#vidTinyAdventureGame').removeClass('hidden');
        //}
        //else {
        //    $('#vidTinyAdventureGame').addClass('hidden');
        //}
    });
    $('#btnCarRemote').click(function(event) {
        event.preventDefault();
        //$('#vidCarRemote').removeClass('hidden');
        if ($('#vidCarRemote').hasClass('hidden') === true && ($('#vidHangman').hasClass('hidden') === false ||
            $('#vidMovieSearch').hasClass('hidden') === false || $('#vidTinyAdventureGame').hasClass('hidden') ==  false)){
            $('#vidCarRemote').removeClass('hidden');
            $('#vidHangman').addClass('hidden');
            $('#vidMovieSearch').addClass('hidden');
            $('#vidTinyAdventureGame').addClass('hidden');

            $('#space_CarRemote').switchClass('spacer','selected');
            $('#space_Hangman').switchClass('selected', 'spacer');
            $('#space_MovieSearch').switchClass('selected', 'spacer');
            $('#space_TinyAdventureGame').switchClass('selected', 'spacer');
        }

        //else if ($('#vidCarRemote').hasClass('hidden') === true) {
        //    $('#vidCarRemote').removeClass('hidden');
        //}
        //else {
        //    $('#vidCarRemote').addClass('hidden');
        //}
    });
});

