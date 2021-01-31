//////////////////////////////////////////////////
/////       For Loading select 2    //////////////
//////////////////////////////////////////////////

$('.select2-input').select2({
    width: '100%',
    placeholder: 'Select or Add',
    tags: true,
    insertTag: function (data, tag) {
        tag.text = '<img src="./assets/images/logo.png" alt="Logo" class="img-fluid me-2" width="30px">' +
            '<span>No Results Found</span>' +
            '<button class="btn btn-sm btn-primary float-end mb-2">Add?</a>';
        $('.select2-found-text').remove();
        data.push(tag);
    },
    matcher: function (params, data) {
        let result = $.fn.select2.defaults.defaults.matcher(params, data);
        
        if (params.term != null && result != null && result.text.toLowerCase() == params.term.toLowerCase() && $('.select2-found-text').length == 0) {
            $('.select2-results').append('<div class="bg-white p-1 mb-1 select2-found-text"><hr class="mt-0 mb-1">' +
                '<img src="./assets/images/logo.png" alt="Logo" class="img-fluid me-2" width="30px">' +
                '<div class="float-end">' +
                '<p class="font-12 mb-0">message 1: this is a nice person</p>' +
                '<p class="font-12 mb-0">message 2: this is a nice person</p>' +
                '</div></div>');
        }

        return result;
    },
    escapeMarkup: function (markup) {
        return markup;
    },
});

//////////////////////////////////////////////////
/////       For Loading Datatables    ////////////
//////////////////////////////////////////////////

$('.dataTable-table').DataTable({
    responsive: true
});


//////////////////////////////////////////////////
/////             Date picker         ////////////
//////////////////////////////////////////////////

$('.datepicker').datepicker();