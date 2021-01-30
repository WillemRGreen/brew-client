import React, { Component } from 'react'

export default class Kalita extends Component {
    render() {
        return (
            <>
                <h2>
                    Kalita Guide
                </h2>
                <article>
                    <p>
                        The Kalita brewer is one of the more complicated brewing methods. It is at its base a percolation method, which means that it revolves around water dripping through the coffee grounds and not soaking in them. 
                    </p>
                    <p>
                        You'll have to wet the filter inside the kalita, and add the grounds. Then you'll want to make a "bloom" with the coffee by adding the weight of the coffee's worth in water and waiting 30 seconds before adding any more.
                    </p>
                    <p>
                        Once 30 seconds pass, add water up to 200g. After that point, just add 50g every 15 seconds until you have reached your projected brew weight. If you need help calculating your weights for the brew, just find the weight of how much coffee you want to make. Then divide that number by your preferred ratio to get your input weight. The brewing algorithm will do that automatically as long as you know how much coffee you want to make.
                    </p>
                    <p>
                        After you've reached your projected brew weight, let the water drip down until the drips from the kalita are roughly three seconds apart. Then you can dispose of your filter and enjoy your coffee!
                    </p>
                </article>
            </>
        )
    }
}