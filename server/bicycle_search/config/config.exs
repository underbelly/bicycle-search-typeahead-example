# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :bicycle_search,
  ecto_repos: [BicycleSearch.Repo]

# Configures the endpoint
config :bicycle_search, BicycleSearchWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ux1RvegGN4PUNn4HzayRcETNug1xn83EeO624iSOt5iLgfulpzmJMpTL+T35xgCk",
  render_errors: [view: BicycleSearchWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: BicycleSearch.PubSub,
  live_view: [signing_salt: "t+kyyX5e"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
