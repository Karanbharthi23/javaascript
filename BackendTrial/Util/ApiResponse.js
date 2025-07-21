class ApiResponse {
    constructor(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.success = status >= 200 && status < 300; // Assuming success for 2xx status codes
    }
}