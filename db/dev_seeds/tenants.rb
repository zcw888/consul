section "Creating Tenants" do
  Tenant.where(name: "CONSUL", title: "CONSUL", subdomain: "public", postal_code: "280").first_or_create!
end
