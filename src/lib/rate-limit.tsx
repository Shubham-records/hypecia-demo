import { LRUCache } from 'lru-cache'

type Options = {
  uniqueTokenPerInterval?: number
  interval?: number
}

export function rateLimit(options?: Options) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  })

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0]
        if (tokenCount[0] === 0) {
          tokenCache.set(token, [1])
          resolve()
        } else if (tokenCount[0]! < limit) {
          tokenCount[0]! += 1
          tokenCache.set(token, tokenCount)
          resolve()
        } else {
          reject()
        }
      }),
  }
}

// Alternative: Simple in-memory rate limiter without external dependencies
export class SimpleRateLimiter {
  private requests: Map<string, number[]> = new Map()
  private interval: number
  private limit: number

  constructor(limit: number, intervalMs: number) {
    this.limit = limit
    this.interval = intervalMs
    
    // Cleanup old entries every minute
    setInterval(() => this.cleanup(), 60000)
  }

  check(identifier: string): boolean {
    const now = Date.now()
    const timestamps = this.requests.get(identifier) || []
    
    // Filter out old requests
    const recentRequests = timestamps.filter(
      time => now - time < this.interval
    )
    
    if (recentRequests.length >= this.limit) {
      return false
    }
    
    recentRequests.push(now)
    this.requests.set(identifier, recentRequests)
    return true
  }

  private cleanup() {
    const now = Date.now()
    for (const [key, timestamps] of this.requests.entries()) {
      const recent = timestamps.filter(time => now - time < this.interval)
      if (recent.length === 0) {
        this.requests.delete(key)
      } else {
        this.requests.set(key, recent)
      }
    }
  }
}