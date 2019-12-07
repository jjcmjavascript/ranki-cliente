<?php

namespace App\Exceptions;

use Exception;
use Request;
use App\Models\Exceptions as Error;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        if (Auth::user()) {
            Error::create([
                'usuario_id' => Auth::user()->id,
                'code' => $exception->getCode(),
                'file' => $exception->getFile(),
                'line' => $exception->getLine(),
                'message' => $exception->getMessage(),
                'action' => Request::url(),
                'input' => json_encode(Request::all()),
            ]);
        }
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        /*if(env('APP_DEBUG')) {
            $mensaje = [$exception->getLine().':'.$exception->getMessage()];
        }
        else {
            $mensaje = ['Ha ocurrido un problema'];
        }*/

        //return response()->json($mensaje, 500);

        return parent::render($request, $exception);
    }
}
