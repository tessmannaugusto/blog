import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";


export default function limiterMinute(limit: number): RateLimitRequestHandler {
  return rateLimit({
    windowMs: 60 * 1000,
    limit,
    message: { error: 'Too many requests, please try again later.' }
  })
}