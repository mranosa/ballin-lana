use Rack::Static, 
  :urls => ["/components", "/images", "/scripts", "/views", "/styles", "/font", "/config"],
  :root => "public"

run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
