FROM microsoft/dotnet:1.1-sdk
COPY . /app/src/
WORKDIR /app/src
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
EXPOSE 5001
ENV ASPNETCORE_URLS http://*:5000
ENTRYPOINT ["dotnet", "run", "--server.urls", "http://0.0.0.0:5001"]