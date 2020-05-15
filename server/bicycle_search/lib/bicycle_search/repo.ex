defmodule BicycleSearch.Repo do
  use Ecto.Repo,
    otp_app: :bicycle_search,
    adapter: Ecto.Adapters.Postgres
end
