import api from "$lib/utils/api/appApi";
import type SubscriptionIntentResponse from "./SubscriptionIntentResponse";

export default class SubscriptionService {
    async subscribeIntent(plan: string, provider: string, method: string): Promise<SubscriptionIntentResponse> {
        try {
            const response = await api.post<SubscriptionIntentResponse>("/payment/create-intent", {
                provider,
                resource: plan,
                method
            });

            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
}