import { ZapIcon } from "lucide-react";
export const RateLimitedInfo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center p-6">
          <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 sm:mn-0 sm:mr-6">
            <ZapIcon className="text-primary size-10" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold mb-2">Rate Limit Reached</h2>
            <p className="text-base-content mb-1 max-sm:text-balance">
              You've made too many requests in a short period of&nbsp;time. Please
              wait a moment.
            </p>
            <p className="text-sm text-base-content/70">
              Try again in a few seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
