define(['angular'], function (angular) {
    
    // $state.go('contacts.details', { contactId: randId });
    return function($state){
        $state.go('test.list');
    };

});
