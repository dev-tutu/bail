class AjaxRequest {

  constructor(config) {
    this.method = config.method || 'GET';
    this.url = config.url || '/';
    this.data = config.data || null;
    this.headers = config.headers || {};
    this.timeout = config.timeout || 5000; // 5 seconds timeout by default
  }

  send() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      // Construct URL for GET request with data as query parameters
      if (this.method === 'GET' && this.data) {
        const queryParams = new URLSearchParams();
        for (const key in this.data) {
          queryParams.append(key, encodeURIComponent(this.data[key]));
        }
        this.url += `?${queryParams.toString()}`;
      }

      xhr.open(this.method, this.url);

      // Set headers
      for (const header in this.headers) {
        xhr.setRequestHeader(header, this.headers[header]);
      }

      xhr.timeout = this.timeout;

      xhr.onload = function () {
        const responseCode = xhr.status;
        const responseData = xhr.responseText;

        if (responseCode >= 200 && responseCode < 300) {
          resolve({ code: responseCode, data: responseData });
        } else {
          reject({ code: responseCode, data: responseData });
        }
      };

      xhr.onerror = function () {
        reject(new Error('Request failed due to network error'));
      };

      xhr.ontimeout = function () {
        reject(new Error('Request timed out'));
      };

      // Send POST data if method is POST
      if (this.method === 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(this.data));
      } else {
        xhr.send();
      }
    });
  }
}

// Example usage for GET request

/*
const getRequest = new AjaxRequest({
  method: 'GET',
  url: 'https://api.example.com/data',
  data: { key1: '<script>alert("XSS");</script>', key2: 'value2' },
  timeout: 10000 // 10 seconds timeout
});

getRequest.send()
  .then(response => {
    console.log('GET Response:', response.code, response.data);
  })
  .catch(error => {
    console.error('GET Error:', error.code, error.data);
  });

// Example usage for POST request
const postRequest = new AjaxRequest({
  method: 'POST',
  url: 'https://api.example.com/post-data',
  data: { key: '<script>alert("XSS");</script>' },
  headers: {
    'Authorization': 'Bearer your_token_here'
  },
  timeout: 15000 // 15 seconds timeout
});

postRequest.send()
  .then(response => {
    console.log('POST Response:', response.code, response.data);
  })
  .catch(error => {
    console.error('POST Error:', error.code, error.data);
  });
*/
