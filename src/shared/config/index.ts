interface ApiConfig {
    url: string;
    host: string;
    protocol: string;
}

interface ServerConfig {
    api: ApiConfig,
    openApiUrl: string,
}

interface PublicConfig {
    api: ApiConfig
}

export interface Config {
    server: ServerConfig
    public: PublicConfig
}

export const config: Config = {
    server: {
        api: {
            url: process.env.API_URL ?? "",
            host: process.env.API_URL_HOST ?? "",
            protocol: process.env.API_URL_PROTOCOL ?? "",
        },
        openApiUrl: process.env.OPENAPI_URL ?? "",
    },
    public: {
        api: {
            url: process.env.API_URL ?? "",
            host: process.env.API_URL_HOST ?? "",
            protocol: process.env.API_URL_PROTOCOL ?? "",
        },
    }
}