angular.module('mytodo').factory('OAuthMethods', function() {


return function makeRequest () {

var oauth = OAuth({
    consumer: {
        public: 'wWeUFLUzevT6S1xJFxktduQ1q',
        secret: 'nOKYshuQT79xbJ16qz8NAo41ZOvPDeHzyKEdMhCfNspebA8MEl'
    },
    signature_method: 'HMAC-SHA1'
});

var request_data = {
    url: 'https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi',
    method: 'GET'
};

var token = {
    public: '1736929698-GONB51a4moKTr8SDbeOZRLnDy6sXcXWcJiQB1mI',
    secret: 'ISLkbWmxC9NacbeQriVjniw3mTTpvdzdDxP7Z5krfugke'
};

request({
    url: request_data.url,
    method: request_data.method,
    form: request_data.data,
    headers: oauth.toHeader(oauth.authorize(request_data, token))
}, function(error, response, body) {
    console.log(body);
});

};


});