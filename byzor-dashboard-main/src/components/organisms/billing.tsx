import { Button } from '@/components/atoms/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/atoms/card'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$29',
    description: 'For small businesses getting started',
    features: ['Up to 100 products', 'Basic analytics', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'For growing businesses',
    features: ['Unlimited products', 'Advanced analytics', 'Priority support', 'Custom domain'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: ['Unlimited everything', 'Dedicated account manager', 'Custom integrations', 'SLA'],
  },
]

export default function billing() {
  return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">billing Plans</h1>
        <p className="text-xl mb-12 text-center">Choose the plan that's right for your business</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
  )
}

