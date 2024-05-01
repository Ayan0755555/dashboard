/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MYSQL_HOST: "127.0.0.1",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "task",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "12145678",
  },
};

export default nextConfig;
