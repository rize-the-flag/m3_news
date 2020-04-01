$( document ).ready( function () {


    $.get( `http://data.fixer.io/api/latest`,
        {
            access_key: `5c29af2ad74240e4226d7c120cef2cb2`,
            symbols: 'USD, RUB'
        },
        response => {
            let ru_eur = Math.round( response.rates.RUB * 100 ) / 100;
            let ru_usd = Math.round( 1 / response.rates.USD * ru_eur * 100 ) / 100;
            $( '.EUR-val' ).text( ru_eur );
            $( '.USD-val' ).text( ru_usd );
        } );
} );