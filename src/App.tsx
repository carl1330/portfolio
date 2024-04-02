import Navbar from "./components/navbar";
import Section from "./components/section";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="flex h-screen w-screen justify-evenly">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="w-96">
            <h1>Carl</h1>
            <h1>Gulliksson</h1>
            <p>
              Software developer, insert rest of cool intro here bla lba bla
              blabalbalbalb al bal bal lba lbala bla bla blal aaaaaaa aaaaaaa
              aaaa a a a a aaaaaaa aaaa
            </p>
          </div>
        </div>
        <div className="w-[1080px] h-full overflow-hidden bg-black bg-[url('https://lh3.googleusercontent.com/pw/AP1GczNinp4bJoUNIKr1kaujwl097bfGUH98Gt6-3INQUsNvss90gj3j9Q1IwdR9cuzym4HcFrp2lNXDbe2jXCYtDkG7OvpkMMIeFpnIDV3y6U8fBWQGvbnmbxGW98tmJ0qAK2UFnyiXAYihDZEePO-AyAfRsRF9wI6-4iCl49JiPfmnl-RVsfasVjilgioD16PIlgu_Oh8_RvZVg8LqCD-tr1L_jjYDWyUWaH8yKNJErVYfG9KJQbkrw6kxIIhCPSxfrf1hCXzwEc4DEcQiFfd26OLM-OkGN2DceorVwU9W8GWXgHS_rl1sHJfPi40Tc4rCAm51RFiicWWeaMsnTfyf0r8WeMCnz7rsNUEkj-Mbsp_or1ihqIMsXlDW_RQL0DFNoB4-4FqdyNHnWwbsB-FUTu-Zu5YjdPHTq6QYehxNEsU4Lwb5V3jV0IRh0a0BD2U8W1cMoDGfCXXLS-gi_AGJb6EJt-uZXH-ux5ZR1PC20z1fxv4A5Y0LtTdCE7GIId4wwZCTArdz3ysdisEgp3aNvNvpXm8Q2gc1WEeeip5_fHG5iaf85uypp22G95s6SSPfJX861V_A5Y6v0s3fKB6XvSPeXkYf5e6FLjHwReOPRaFu5mBY3l_wQdA6YhDHsYbGb7woNSZNmk_ATh3_g9vHWw9P-Ia5EC_lisApb8Iw8NsdaG7fVhdiJwl7NBfG7tyE345MMTGqmgkFXg-544OvNW22Nz2ZhZ50b02nmbTIeRjqprdyxAM9beKnxccIINWnm9sb6jfPInlM7_afTDe58UjhBSeOA5c-UfwDymRvcazTElkx5Xib-LdMQ42P9YA-YlhWXFcrnP5LJdHVlCvKaMWRiBmJ50ExmC_v3DK45J0MFAQbDMFKXoAJaMF-if5-fOU8r_aMeExRClYkS5PNRVuQ8ytepUGr5J7Fuq7eNc7B377hLRdeKwnwJO-id1SJMqVqHshCVp9LtY0WhmqLeNZVf4txLLEE=w1440-h973-s-no-gm?authuser=0')] bg-[center_right_45rem] bg-[length:181%]"></div>
      </div>
      <Section title="About">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Section>
      <Section title="Projects"></Section>
      <Section title="Contact"></Section>
    </main>
  );
}
