class ApiError extends Error
{
    constructor(
        statusCode,
        message="Something went wrong",
        errors = null,
        statck = null
    ){
        super(message);
        this.statusCode = statusCode,
        this.errors = errors,
        this.data=null,
        this.stuts= false,
        this.statck = statck
    if(statck){
        this.statck = statck;
    }
    else
    {
        Error.captureStackTrace(this, this.constructor);
    }
    }
}