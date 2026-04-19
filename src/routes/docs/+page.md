# Introduction to CloudSpark

Welcome to the CloudSpark Desktop documentation. CloudSpark is a native Windows application built specifically for digital artists, designers, and video editors who need professional-grade version control without the complexity of Git.

> CloudSpark handles massive binary files—such as PSDs, BLENDs, and MP4s—with ease, utilizing a highly optimized Rust-based backend.

## Why CloudSpark?

Standard version control systems aren't designed for artists. If you version a 1GB `.psd` file in vanilla Git, your `.git` folder balloons exponentially with every change. CloudSpark solves this by fundamentally rethinking how we track binary changes locally and in the cloud.

### Key Features
- **Infinite Timelines:** Never fear overwriting a file again. Every save creates a restorable waypoint.
- **Visual Diffing:** See exactly how your artwork changed across commits. (Current support: PSD, PNG, JPG).
- **Optimized Storage:** CloudSpark analyzes binary patches locally, radically reducing disk bloat compared to duplicated files.
- **Offline First:** All your commits, timelines, and diffs are 100% available without an internet connection.

## Next Steps

To begin using CloudSpark, simply [Download the client](/#download) and execute `CloudSpark-Setup.exe`. Read the installation guide below for customized registry configurations.

```bash
# Developers connecting to the CLI
cloudspark init .
cloudspark track "*.psd"
```

## Need Help?

If you run into any issues during installation, please head over to our [Support Center](/support) or check our X/Twitter feed for any active incident alerts.
