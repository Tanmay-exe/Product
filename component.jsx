/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AI4bJauBc01
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-background">
      <header className="container mx-auto py-4 flex items-center justify-between">
        <Link href="#" prefetch={false}>
          <img
            src="/placeholder.svg"
            alt="MFC Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
            style={{ aspectRatio: "120/40", objectFit: "cover" }}
          />
        </Link>
        <div className="flex items-center gap-4">
          <Button size="lg">Add to Bag</Button>
          <Link href="#" className="text-primary hover:underline" prefetch={false}>
            Learn More
          </Link>
        </div>
      </header>
      <section className="container mx-auto py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div>
            <img
              src="/placeholder.svg"
              alt="MFC Cricket Journal"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg object-cover"
              style={{ aspectRatio: "600/600", objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">MFC Cricket Journal</h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-6">
              Capture your cricket memories in style with our premium leather-bound journal.
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg">Add to Bag</Button>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Product Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Material</h3>
                <p className="text-muted-foreground">Premium Leather</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Size</h3>
                <p className="text-muted-foreground">A5 (5.8 x 8.3 inches)</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Pages</h3>
                <p className="text-muted-foreground">192 pages</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Closure</h3>
                <p className="text-muted-foreground">Elastic band</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Product Description</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              The MFC Cricket Journal is the perfect companion for cricket enthusiasts who want to document their
              passion for the sport. Crafted with premium leather, this journal features a sleek and sophisticated
              design that will elevate your note-taking experience. With 192 high-quality pages, you can capture your
              thoughts, strategies, and memories in style.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12 md:py-16 lg:py-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Related Product 1"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Cricket Notebook</h3>
              <p className="text-muted-foreground mb-4">Durable notebook for cricket enthusiasts.</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">$14.99</span>
                <Button size="sm">Add to Bag</Button>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Related Product 2"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Cricket Planner</h3>
              <p className="text-muted-foreground mb-4">Stay organized with our cricket planner.</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">$19.99</span>
                <Button size="sm">Add to Bag</Button>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Related Product 3"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Cricket Scorebook</h3>
              <p className="text-muted-foreground mb-4">Record your cricket matches in style.</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">$12.99</span>
                <Button size="sm">Add to Bag</Button>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Related Product 4"
              width={400}
              height={400}
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Cricket Diary</h3>
              <p className="text-muted-foreground mb-4">Capture your cricket memories in this elegant diary.</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">$16.99</span>
                <Button size="sm">Add to Bag</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
