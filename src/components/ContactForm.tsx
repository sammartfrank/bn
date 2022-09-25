import { useFormik } from 'formik';
import cntl from 'cntl';
import { Input } from './Input';
import { Select } from './Select';

const inputCN = cntl`
  flex
  flex-col
  sm:flex-row
  sm:space-y-0
  sm:space-x-4
  mt-2
  space-y-2
`;

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      text: '',
      country: ''
    },
    onSubmit: (values, helpers) => {
      console.log('Values: ', values);
    }
  });

  return (
    <div className="relative w-full bg-[#036ffcff]">
      <div className="absolute top-[-200px] z-[-1] w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#036ffcff"
            fillOpacity="1"
            d="M0,128L40,122.7C80,117,160,107,240,101.3C320,96,400,96,480,80C560,64,640,32,720,42.7C800,53,880,107,960,117.3C1040,128,1120,96,1200,90.7C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <form id={'contact'} onSubmit={formik.handleSubmit} className="w-full container h-screen">
        <h1 className="text-9xl flex justify-center font-extrabold  text-white">CONTACT US</h1>
        <div className="flex flex-col w-2/3 my-14 mx-auto lg:gap-10 lg:justify-between bg-[#036ffcff] bg-white shadow-lg rounded-xl p-6">
          <div className={inputCN}>
            <Input
              color="secondary"
              className="w-full"
              id="fullName"
              name="fullName"
              label="Name"
              placeholder="Please insert your Name"
              onChange={formik.handleChange}
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <p className="my-1 text-primary-500">{formik.errors.fullName}</p>
            )}
          </div>
          <div className={inputCN}>
            <div className="w-full">
              <Input
                color="secondary"
                className="w-full"
                id="email"
                name="email"
                label={'Email'}
                placeholder={'Please insert your Email'}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="my-1 text-primary-500">{formik.errors.email}</p>
              )}
            </div>
          </div>

          <div className={inputCN}>
            <div className="w-full">
              <Input
                color="secondary"
                className="w-full"
                id="phoneNumber"
                name="phoneNumber"
                label={'Phone Number'}
                placeholder={'Please insert your Phone number'}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="my-1 text-primary-500">{formik.errors.phoneNumber}</p>
              )}
            </div>
          </div>
          <div className={inputCN}>
            <div className="w-full">
              <Select
                color="secondary"
                className="w-full"
                id="country"
                name="country"
                label={'Country'}
                placeholder={'Please select your country'}
                onChange={(e) => formik.setFieldValue('country', e.target.value)}
                value={formik.values.country}
              >
                {/* {Object.entries(isoCountries.getNames('en', { select: 'official' }))
                .sort(([, name1], [, name2]) => (name1 > name2 ? 1 : -1))
                .map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))} */}
              </Select>
              {formik.errors.country && formik.touched.country && (
                <p className="my-1 text-primary-500">{formik.errors.country}</p>
              )}
            </div>
          </div>
          <div className={inputCN}>
            <div className="w-full">
              {/* <Input
              color="secondary"
              className="w-full"
              id="text"
              name="text"
              label={'Message'}
              placeholder={'Please insert your Message'}
              onChange={formik.handleChange}
              type="text"
            /> */}
              <label className="my-5 text-white ">Message</label>
              <textarea
                id="text"
                name="text"
                className="w-full mt-2"
                onChange={formik.handleChange}
                placeholder="Please send us your message..."
              ></textarea>
              {formik.errors.email && formik.touched.email && (
                <p className="my-1 text-primary-500">{formik.errors.email}</p>
              )}
            </div>
          </div>
        </div>
        {formik.status && <p className="mt-2.5 text-primary-500">{formik.status}</p>}
      </form>
    </div>
  );
};
