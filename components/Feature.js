import Image from "next/image";

export default function Feature() {
  return (
    <section id="feature">
      <div className="container py-100">
        <div className="row">
          <div className="col-md-7 position-relative">
            <Image
              className="object-fit-contain"
              src="/img/feature.jpg"
              alt="Feature"
              fill
            />
          </div>
          <div className="col-md-5">
            <h5>What Makes Our Menus Special ?</h5>
            <ul>
              <li>
                <Image
                  alt="feature-icon"
                  width={70}
                  height={100}
                  src="/img/feature-icon-1.png"
                />
                <div>
                  <h4>Pure Ingredients</h4>
                  <p>
                    Vestibulum morbi blandit cursus risus at ultrices mi.
                    Facilisis gravida neque convallis a.
                  </p>
                </div>
              </li>
              <li>
                <Image
                  alt="feature-icon"
                  width={70}
                  height={100}
                  src="/img/feature-icon-2.png"
                />
                <div>
                  <h4>Pure Ingredients</h4>
                  <p>
                    Vestibulum morbi blandit cursus risus at ultrices mi.
                    Facilisis gravida neque convallis a.
                  </p>
                </div>
              </li>
              <li>
                <Image
                  alt="feature-icon"
                  width={70}
                  height={100}
                  src="/img/feature-icon-3.png"
                />

                <div>
                  <h4>Pure Ingredients</h4>
                  <p>
                    Vestibulum morbi blandit cursus risus at ultrices mi.
                    Facilisis gravida neque convallis a.
                  </p>
                </div>
              </li>
              <li>
                <Image
                  alt="feature-icon"
                  width={70}
                  height={100}
                  src="/img/feature-icon-4.png"
                />
                <div>
                  <h4>Pure Ingredients</h4>
                  <p>
                    Vestibulum morbi blandit cursus risus at ultrices mi.
                    Facilisis gravida neque convallis a.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
