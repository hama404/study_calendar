FROM ruby:2.7.0

RUN apt-get update -qq && \
    apt-get install -y build-essential \
                       nodejs

RUN mkdir /myapp
WORKDIR /myapp

COPY ./src/Gemfile /myapp
COPY ./src/Gemfile.lock /myapp

RUN bundle install
COPY ./src /myapp

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 80

# Start the main process.
RUN mkdir -p tmp/sockets
